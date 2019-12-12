pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Clone Repo') {
            steps {
              git 'https://github.com/JimmiHagen/demo'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm config ls'
                sh 'npm -i save'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'node demo.js'
            }
        }
    }
}
