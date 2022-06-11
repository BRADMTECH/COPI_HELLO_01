pipeline {
  agent any
    
  tools {nodejs "Node v10.19.0"}
    
  stages {
        
     
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
    stage('Deploy'){
        steps{
            sh 'echo ===DEPLOY MOCK==='
        }
    }
  }
}
