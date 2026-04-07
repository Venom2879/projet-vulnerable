<?php

namespace App\Controller;

use App\Core\Controller;
use App\Repository\UserRepository;

class AuthController extends Controller
{
    private ?\mysqli $conn = null;

    /**
     * @info
     * Toujours utiliser : PDO, ORM et les requêtes préparés (voir dans le UserRepository)
     *
     * */
//    public function __construct()
//        $username = 'vnm';
//        $password = 'venom';
//        $host = '127.0.0.1';
//        $port = 3306;
//        $dbname = 'php_poo';
//
////        $this->conn = mysqli_connect($host, $username, $password, $dbname, $port);

//        if (!$this->conn) {
//            die('Connection failed: ' . mysqli_connect_error());
//        }
//    }

    public function login(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        if (isset($_SESSION['connected'])) {
            $this->redirect('/');
        }

        /**
         * @todo
         * Ce que vous devez faire :
         * - Passer par la methode findByEmail du UserRepository
         * - Recuperer le User et et dans une condition comparer son mot de passe enrgister avec celui entré avec la methode password_verify
         * - Si c'est vrai alors enregister le $_SESSION['connected'] = true; puis rediger dans la page home
         * - Sinon retourner une execption !
         *
         */

        /**
         * @info
         * "' OR 1=1 -- ": la chaine suivante ajoute une condition qui est toujours vrai et commente la suite de la query.
         * */
//            $query = "SELECT * FROM `user` WHERE email='$email' AND password='$password'";
//            $result = $this->conn->query($query);

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $userRepository = new UserRepository();
            $user = $userRepository->findByEmail($email);

            if (!$user) {
                throw new \Exception("User not found", 404);
            }


            if (password_verify($password, $user->getPassword())) {
                if (session_status() === PHP_SESSION_NONE) {
                    session_start();
                }

                $_SESSION['connected'] = true;
                $this->redirect('/');
            } else {
                throw new \Exception('Invalid Credentials', 400);
            }
        }

        $this->render('auth/login', [
            'title' => 'Sing in'
        ]);
    }


    public function logout(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        session_destroy();
        $this->redirect('/login');
    }
}