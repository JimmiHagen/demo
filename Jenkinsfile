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
                //echo 'installing..'
                sh 'npm install'
            }
        }
        stage('Test'){
          steps {
            //echo 'Testing...'
            sh 'npm test'
          }
        }
        stage('Deploy') {
            steps {
                //echo 'Deploying....'
                sh 'node demo.js'
            }
        }
    }
}
