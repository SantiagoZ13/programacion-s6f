#!/bin/bash
# AUTOR: santiago-ponce
# DESCRIPCIÓN: Configura LVM, SSH y LAMP en Ubuntu Server

echo "Actualizando sistema..."
sudo apt update && sudo apt upgrade -y

# 1. Configuración de LVM
sudo apt install lvm2 -y

# Particionar disco 
sudo fdisk /dev/sda

# Crear volumen físico, grupo y lógico
sudo pvcreate /dev/sda1
sudo vgcreate vg_santiago /dev/sda1
sudo lvcreate -L 10G -n lv_data vg_santiago

# Formatear y montar
sudo mkfs.ext4 /dev/vg_santiago/lv_data
sudo mkdir /mnt/santiago_data
sudo mount /dev/vg_santiago/lv_data /mnt/santiago_data

# 2. Instalación de SSH 
sudo apt install openssh-server -y
sudo systemctl enable ssh
sudo systemctl start ssh

# 3. Instalación de LAMP 

# Apache
sudo apt install apache2 -y
sudo systemctl enable apache2

# MariaDB (MySQL)
sudo apt install mariadb-server -y
sudo mysql_secure_installation 

# PHP
sudo apt install php libapache2-mod-php php-mysql -y

# phpMyAdmin
sudo apt install phpmyadmin -y
