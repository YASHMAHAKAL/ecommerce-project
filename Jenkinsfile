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
        stage('Test API') {
            steps {
                sh 'curl -f http://localhost:5001/products'
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}

