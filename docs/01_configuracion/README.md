# Configuración
1. Descarga e instala VirtualBox(https://www.virtualbox.org/)
2. Descarga e instala Vagrant(https://www.vagrantup.com/downloads.html)
3. Desde la terminal ve a la carpeta `src` de este repositorio.
4. Una vez dentro de esta carpeta, asegúrate de ver el archivo `Vagrantfile` y la carpeta `bin`, si ambos están ahí ve al siguiente paso, sino haz un double-check de la carpeta que clonaste y que estes en la dirección correcta.
5. Corre el comando `vagrant up`. Este comando va a crear una máquina virtual en tu computadora que tiene como base Ubuntu 16.04, este proceso va a tardar un poco dependiendo de la velocidad de descarga y de tu máquina.
6. Una vez que el comando se ha completado, prueba que la instalación ha sido correcta utilizando el comando `vagrant ssh`. En tu terminal debe aparecer algo como esto:
```bash
Welcome to Ubuntu 16.04.4 LTS (GNU/Linux 4.4.0-130-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

5 packages can be updated.
4 updates are security updates.


vagrant@ubuntu-xenial:~$
```
7. Si hasta este punto todo va bien, sólo sal de la máquina virtual tecleando `exit` y apaga tu máquina virtual con el comando `vagrant halt`. Pronto nos podremos divertir con ella.

_Si tienes problemas durante la instalación no dudes en buscarme en Slack como @wnegrete para ayudarte a solucionarlo lo más pronto posible._