from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Endpoints
@app.get('/')
def hello_world():
    return "Hello, world!"

@app.get('/get-example')
def get_example():
    return {"message": "GET request received"}

@app.post('/post-example')
def post_example(data: dict):
    return {"message": "POST request received", "data": data}

@app.put('/put-example')
def put_example():
    return {"message": "PUT request received"}

@app.delete('/delete-example')
def delete_example():
    return {"message": "DELETE request received"}
