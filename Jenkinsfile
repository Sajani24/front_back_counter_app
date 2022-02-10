pipeline {
    agent any

    stages {
        stage('Access') {
			steps {
				git([url:'https://github.com/Sajani24/front_back_counter_app.git', branch:'main'])
			}
		}
		stage('Build') {
			steps {
				bat 'docker build -t "front_back_counter_app_back" ./back'
				bat 'docker build -t "front_back_counter_app_front" ./front'
			}
		}
		stage('Remove') {
			steps {
				bat 'docker image rm front_back_counter_app_back'
				bat 'docker image rm front_back_counter_app_front'
			}
		}
		stage('Compose') {
			steps {
				bat 'docker-compose up'
			}
		}
    }
}