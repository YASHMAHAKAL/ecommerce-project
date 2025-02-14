pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/YASHMAHAKAL/ecommerce-project.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}

