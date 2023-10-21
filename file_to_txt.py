import PyPDF2
import re
import pypandoc

def file_to_txt(file, new_file):
    if re.search(r'\.pdf$', file):
        pdf_txt(file, new_file)
    elif re.search(r'\.docx', file):
        docx_txt(file, new_file)
    else:
        print('incorrect file format')

def pdf_txt(file, new_file):
    pdf_file_obj = open(file, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file_obj)
    text = ''
    for page in pdf_reader.pages:
        text += page.extract_text()

    save_text(text, new_file)

def docx_txt(file, new_file):
    output = pypandoc.convert_file(file, 'plain', outputfile=new_file)
    assert output == ""


def save_text(text, new_file):
    with open('text.txt', 'w', encoding='UTF-8') as f:
        f.write(text)
    with open('text.txt', 'r', encoding='UTF-8') as r, open(new_file, 'w', encoding='UTF-8') as o:
        for line in r:
            if line.strip():
                o.write(line)