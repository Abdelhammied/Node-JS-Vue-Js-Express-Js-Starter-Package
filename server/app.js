const express = require('express');
const app = express();

// routes 
const adminRoutes = require('./apis/admin');

app.use('/api/admin', adminRoutes);

app.listen(3000);