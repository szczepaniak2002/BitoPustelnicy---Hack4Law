import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageDraw, ImageTk

class ImageEditor:
    def __init__(self, root):
        self.root = root
        self.root.title("Edytor Zdjęć")

        self.canvas = tk.Canvas(root, width=400, height=400, bg="white")
        self.canvas.pack()

        self.load_button = tk.Button(root, text="Wczytaj Zdjęcie", command=self.load_image)
        self.load_button.pack()

        self.save_button = tk.Button(root, text="Zapisz", command=self.save)
        self.save_button.pack()

        self.canvas.bind("<ButtonPress-1>", self.start_draw)
        self.canvas.bind("<B1-Motion>", self.draw)

        self.undo_button = tk.Button(root, text="Cofnij", command=self.undo)
        self.undo_button.pack()

        self.image = None
        self.start_x = None
        self.start_y = None
        self.end_x = None
        self.end_y = None
        self.rectangles = []

    def load_image(self):
        file_path = filedialog.askopenfilename()
        if file_path:
            self.image = Image.open(file_path)
            self.image.thumbnail((400, 400))
            self.photo = ImageTk.PhotoImage(self.image)
            self.canvas.create_image(0, 0, anchor=tk.NW, image=self.photo)

    def start_draw(self, event):
        if self.image:
            self.start_x = event.x
            self.start_y = event.y

    def draw(self, event):
        if self.start_x is not None and self.start_y is not None:
            self.end_x = event.x
            self.end_y = event.y
            self.refresh_canvas()

    def undo(self):
        if self.rectangles:
            self.rectangles.pop()
            self.refresh_canvas()

    def refresh_canvas(self):
        self.canvas.delete("all")
        if self.image:
            self.photo = ImageTk.PhotoImage(self.image)
            self.canvas.create_image(0, 0, anchor=tk.NW, image=self.photo)
            draw = ImageDraw.Draw(self.image)
            for x1, y1, x2, y2 in self.rectangles:
                draw.rectangle([x1, y1, x2, y2], fill="black")

        if self.start_x is not None and self.end_x is not None:
            self.rectangles.append((self.start_x, self.start_y, self.end_x, self.end_y))
            self.canvas.create_rectangle(self.start_x, self.start_y, self.end_x, self.end_y, outline="black", fill="black")

    def save(self):
        if self.image:
            filename = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG files", "*.png")])
            if filename:
                self.image.save(filename)

if __name__ == "__main__":
    root = tk.Tk()
    app = ImageEditor(root)
    root.mainloop()
