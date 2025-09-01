# Sui Generis
## Microservices eCommerce Marketplace Platform (TypeScript)

## Overview

<p align='justify'>Scalable event-driven eCommerce platform using microservices architecture. Features include Real-Time Chat, AI Agent (Ada) Integration, Semantic Product Search, User Management, Order Wishlist, Order Reviews and Paystack, Flutterwave & Stripe-powered payments. Adopted a Domain Driven Design approach to promote component reusability &  guarantee bounded context and low-latency communications between respective microservices as clear domain boundaries eliminate the potential for latency gridlock performance issues that can result from redundant or circular service calls. Optimized for observability with Prometheus, Grafana and Kibana; orchestrated via Kubernetes and deployed to AWS EKS.

Designed and developed to be a rapid deployment eCommerce marketplace platform of its own kind for administrator merchants and their approved affiliates to proffer products/services to target customers with extensible core functionality features.
</p>

#### System Requirements
```
⦿ NodeJS 20+
⦿ ≥ 16GB RAM
⦿ Hard Drive: ≥ 5GB of available storage
⦿ Docker Desktop (for local container deployment)
⦿ Amazon Web Services
```

## System Design & Architecture

### Microservice Architecture 
** Private Repositories (Access available upon request) 🔐
<ul>
<li><a href="https://github.com/emeraldemperaur/sui-generis-apigateway"target="_blank">API Gateway Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-notification" target="_blank">Notification Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-authentication"target="_blank">Authentication Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-users"target="_blank">Users Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-productservice"target="_blank">ProductService Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-orderinvoice"target="_blank">OrderInvoice Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-reviews"target="_blank">Reviews Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-chat"target="_blank">Chat Microservice</a></li>
<li><a href="https://github.com/emeraldemperaur/sui-generis-client"target="_blank">ClientUI Microservice</a></li>
</ul>

### Services Synopsis
#### API Gateway
<ul>
<li>Object Oriented::Server, Route, Controller methods</li>
<li>JWT Authenticated Client<->API Gateway connection via HTTP</li>
<li>Secure API Gateway<->*Microservice(s) connection via HTTP & Socket.IO (WebSockets)</li>
<li>AMQP (RabbitMQ) Message Broker</li>
<li>Helmet.js - HTTP Header Security</li>
<li>HPP.js - Parameter Pollution Prevention</li>
<li>XSS(Cross Site Scripting) Sanitization</li>
<li>Elasticsearch & Kibana - Logs Monitoring</li>
<li>Redis Database for In-Memory Datastore</li>
</ul>

#### Notification Microservice
<ul>
<li>Nodemailer SMTP Transport</li>
<li>Extensible EJS Email Templates</li>
<li>AMQP (RabbitMQ) Message Broker</li>
<li>Email Notification Event Message Queue Consumers()</li>
<li>Elasticsearch & Kibana - Logs Monitoring</li>
</ul>

### Default Services Health Info Routes
```javascript
// API Gateway Health
fetch('http:localhost:6900/api-gateway-health');
```
```javascript
// API Gateway Info
fetch('http:localhost:6900/api-gateway-info');
```
```javascript
// Notifications Microservice Health
fetch('http:localhost:6901/notifications-health');
```

## Toolstack
### 💻 Frontend
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

### 🖥 Backend & APIs
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-FF6F61?style=for-the-badge&logoColor=white)
![JSON Web Tokens](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-007ACC?style=for-the-badge&logoColor=white)
![Helmet.js](https://img.shields.io/badge/Helmet.js-4C9EEB?style=for-the-badge&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-FF7A00?style=for-the-badge&logoColor=white)

### 🗄 Databases & Caching
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### 📡 Messaging & Real-time
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)

### 🛠 Logging, Monitoring & Analytics
![Winston Logger](https://img.shields.io/badge/Winston_Logger-222222?style=for-the-badge&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![Kibana](https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=kibana&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

### 🐳 Containerization & DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Minikube](https://img.shields.io/badge/Minikube-0F0F0F?style=for-the-badge&logo=minikube&logoColor=white)
![Jenkins CI/CD](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2F3E55?style=for-the-badge&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

### 💳 Payment & Cloud Services
![Ada AI Agent](https://img.shields.io/badge/Ada_AI-FF6F61?style=for-the-badge&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Paystack](https://img.shields.io/badge/Paystack-1E5DC6?style=for-the-badge&logoColor=white)
![Flutterwave](https://img.shields.io/badge/Flutterwave-1F75FE?style=for-the-badge&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)


