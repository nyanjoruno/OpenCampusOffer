from pydantic import BaseModel
from gensim.models import KeyedVectors

# model = KeyedVectors.load_word2vec_format('wiki-40b.pt', binary=True)
# print(model["いぬ"])
# print(model.most_similar("いぬ", topn=10))
# most_similar_words = model.most_similar("いぬ", topn=10)
# for i in most_similar_words:
#     print(i)

vectors = KeyedVectors.load("./chive-1.2-mc5.kv")
# print("すだち : " + vectors["すだち"])
print(vectors.most_similar("猫", topn=5))
# print(vectors.most_similar("ねこ", topn=5))
print(vectors.most_similar("ネコ", topn=5))