import os
import time
import datetime
import subprocess

# 📁 Ruta absoluta de tu repositorio local (modifícala si es necesario)
ruta_repo = r"C:\Users\Hans1\OneDrive\Documentos\Desarrollo WEB\Proyectos\Proyecto Dia Mundial del Internet\Proyecto-Dia-Mundial-Del-Internet"

# ⏱ Intervalo en segundos (1 minuto = 60 segundos)
intervalo = 60

# 🔁 Bucle infinito que hace push cada intervalo
while True:
    ahora = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ahora}] Revisando cambios...")

    os.chdir(ruta_repo)

    # Verificar si hay cambios
    cambios = subprocess.getoutput("git status -s")

    if cambios.strip():  # Si hay algo por commitear
        os.system("git add .")
        os.system(f'git commit -m "Auto-commit: {ahora}"')
        os.system("git push origin main")  # Cambia 'main' por tu rama si es necesario
        print(f"[{ahora}] Cambios subidos a GitHub ✅")
    else:
        print(f"[{ahora}] Sin cambios. Nada que subir.")

    time.sleep(intervalo)
