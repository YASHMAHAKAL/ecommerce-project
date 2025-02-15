pipeline {
    agent any
    environment {
        DOCKER_HUB_USERNAME = credentials('docker-hub-username')  // Define in Jenkins Credentials
        DOCKER_HUB_PASSWORD = credentials('docker-hub-password')
        KUBECONFIG_CONTENTS = credentials('kubeconfig')  // Store kubeconfig in Jenkins Credentials
    }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', credentialsId: 'github-fine-grained-pat', url: 'https://github.com/YASHMAHAKAL/ecommerce-project.git'

            }
        }
        stage('Build & Push Docker Images') {
            steps {
                script {
                    sh 'echo "$DOCKER_HUB_PASSWORD" | docker login -u "$DOCKER_HUB_USERNAME" --password-stdin'
                    sh 'docker build -t $DOCKER_HUB_USERNAME/backend:latest ./backend'
                    sh 'docker push $DOCKER_HUB_USERNAME/backend:latest'
                    sh 'docker build -t $DOCKER_HUB_USERNAME/frontend:latest ./frontend'
                    sh 'docker push $DOCKER_HUB_USERNAME/frontend:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withEnv(["KUBECONFIG=$WORKSPACE/kubeconfig"]) {
                        writeFile file: 'kubeconfig', text: KUBECONFIG_CONTENTS
                        sh 'helm upgrade --install ecommerce ./helm --namespace ecommerce'
                    }
                }
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}
