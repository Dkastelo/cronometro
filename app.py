from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')
    
@app.route('/cronometro')
def cronometro():
    return render_template('cronometro.html')

@app.route('/temporizador')
def temporizador():
    return render_template('temporizador.html')

if __name__ == '__main__':
    app.run()
