import { Router } from 'express';
import customersRouter from '@modules/customers/infra/http/routes/customers.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';

const routes = Router();

routes.use('/customers', customersRouter); // 359619a2-3dcf-4ac3-8ea6-a8f64ffd7a1d
routes.use('/products', productsRouter); // d81cd9d8-70d1-400f-b636-cdc42f83b940
routes.use('/orders', ordersRouter); // 818c2e32-5007-4ff5-84dd-bd8417ab75d9

export default routes;
