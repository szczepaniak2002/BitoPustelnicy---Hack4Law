import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk

class ImageEditor:
    def __init__(self, root):
        self.root = root
        self.root.title("Edytor Zdjęć")

        self.canvas = tk.Canvas(root, width=398, height=263, bg="pink")
        self.canvas.pack()

        self.load_button = tk.Button(root, text="Wczytaj Zdjęcie", command=self.load_image)
        self.load_button.pack()

        self.canvas.bind("<ButtonPress-1>", self.start_drag)
        self.canvas.bind("<B1-Motion>", self.drag)

        self.image = None
        self.drawing = False
        self.start_x = None
        self.start_y = None
        self.rectangle = None

    def load_image(self):
        file_path = filedialog.askopenfilename()
        if file_path:
            self.image = Image.open(file_path)
            self.image.thumbnail((400, 400))
            self.photo = ImageTk.PhotoImage(self.image)
            self.canvas.create_image(0, 0, anchor=tk.NW, image=self.photo)

    def start_drag(self, event):
        if self.image:
            self.drawing = True
            self.start_x = event.x
            self.start_y = event.y

    def drag(self, event):
        if self.drawing:
            x, y = event.x, event.y
            if self.rectangle:
                self.canvas.delete(self.rectangle)
            self.rectangle = self.canvas.create_rectangle(self.start_x, self.start_y, x, y, outline="black", fill="black")

if __name__ == "__main__":
    root = tk.Tk()
    app = ImageEditor(root)
    root.mainloop()
