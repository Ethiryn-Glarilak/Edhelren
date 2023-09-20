from flask import Flask, render_template

def load_page(app: Flask):

    @app.route('/')
    def home():
        return render_template('home.html')
