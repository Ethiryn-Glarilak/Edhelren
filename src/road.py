from flask import Flask, render_template

def load_page(app: Flask):

    @app.route('/')
    def home():
        return render_template(
            'home.html',
            secret_word='Long Word',
            telephone_number='00.00.00.00.00',
        )
