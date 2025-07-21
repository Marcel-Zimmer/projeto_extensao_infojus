import express from 'express';
import 'dotenv/config'; // Garante que o .env seja lido
import './config/database'; // Inicializa a conexão com o BD
import userRoutes from './modules/users/user.routes';
// Importe outras rotas aqui

const app = express();

app.use(express.json());

// Registra as rotas
app.use('/api', userRoutes);
// app.use('/api', productRoutes);

export default app;