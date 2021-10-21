import glob
st = glob.glob("C:/Users/z400/Desktop/PROJETOS/jogo de tarot/img/*")
st = "".join(st)
st = st.replace("C:/Users/z400/Desktop/PROJETOS/jogo de tarot/img",",\n")
print(st)

input()