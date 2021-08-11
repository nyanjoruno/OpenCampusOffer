# from gensim.models import KeyedVectors
# from fastapi import FastAPI
# # from pydantic import BaseModel
# from starlette.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from gensim.models import KeyedVectors

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Inputitems(BaseModel):
    text: str

@app.post("/")
async def create_item(item: Inputitems):
    model = KeyedVectors.load_word2vec_format('wiki-40b.pt', binary=True)
    print(model[item.text])
    print(model.most_similar(item.text, topn=10)) 
    input = item.text
    # model = KeyedVectors.load_word2vec_format('wiki-40b.pt', binary=True)
    return{"text": input}

# @app.get("/{text}")
# def test(text: str = None):
#     return {"text":text}
# def read_root(inputtext: Inputstr):
#     print(inputtext.text)
#     return {"text": inputtext.text}

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"]
# )

# model = KeyedVectors.load_word2vec_format('wiki-40b.pt', binary=True)
# print(model['猫'])
# print(model.most_similar('猫', topn=10)) 

# @app.post("/")
# def read_root():
#     return {"Hello": "World"}

# def main():
#     uvicorn.run(app, host="0.0.0.0", port=8888, reload=True)

# if __name__ == "__main__":
#     main()