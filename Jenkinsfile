pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/gus-sm/test-cicd.git':
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Run'){
        steps{
            sh 'npm run dev'
        }
    }
  }
}
