pipeline {
  agent any
    
  tools {nodejs "Node v12.22.0"}
 
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

    stage('Run'){
    	steps{
		sh 'npm start &'
	}
    }
  }
}
