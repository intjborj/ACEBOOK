pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/intjborj/ACEBOOK.git'
            }
        }

        stage('Build and Run docker Backend') {
            steps {  
	//	  sh 'docker-compose up -d'
                sh 'docker build ./api -t  intjborj/ace-book-api'
                sh 'docker run -d -p "4000:4000"  intjborj/ace-book-api'
            }
        }
 	  stage('Build and Run docker Frontend') {
            steps {  

		        sh 'docker build ./front -t  intjborj/ace-book-front'
		        sh 'docker run -d -p "3000:3000"  intjborj/ace-book-front'

            }
        
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push intjborj/ace-book-api:latest'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
  }
