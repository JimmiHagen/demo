pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Clone Repo') {
            steps {
              git 'https://github.com/JimmiHagen/demo'
            }
        }
        stage('Install') {
            steps {
                echo 'Testing..'
                sh 'npm config ls'
                sh 'npm install'

            }
        }
        stage('Test'){
          steps {
            echo 'Testing...'
            sh 'node demo.js'
            open('https://localhost:8082/')
          }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'node demo.js'&
            }
        }
    }
}
