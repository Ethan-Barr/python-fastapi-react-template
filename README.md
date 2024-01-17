# Python-ReactJS
This project demostrates how to link a React frnotend with a FastAPI backend using Python. This application showcases basic communication between the frontened and backend for various HTTP methods. 

## Prerequisites 

- [Node.js](https://nodeje.org): Ensure that you have Node.js installed on your machine
- [Python](https://www.python.org/): Install Python on your machine, preferbally version 3.9 or later.


## Frontend Setup

### Instalation
1. Navigate to the `react-ui` directory:
```bash
cd react-ui
```

2. Instll dependencies:
```bash
npm install
```

### Running the Frontend
Start the development server:
```bash
npm start
```
Vist http://localhost:3000/ in your browser to view the React Application


## Backend Setup:

### Installation
1. Navigate to the `api` direcotry:
```bash
cd api
```
2. Create a virual enviorment (recomended):
```bash
pythom -m venv venv
```
3. Activate the virual envioment
   - On windows:
   ```bash
   venv\Scripts\activate
   ```
   - On macOS/Linux:
   ```bash
   source venv/bin/activate
   ```
4. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Backend:
Start the FastAPI server:
```bash
python running.py
```
Vist https://localhost:8000/ in your browser to check that is is running


## Usage
The project includes examples for various HTTP methods (GET, POST, PUT, DELETE) between the React frontend and FastAPI backend. Explore the code in both frontend and backend directories to understand how the communication is established.

## Contributing
If you'd like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License - see the `LICENSE.md` file for details.