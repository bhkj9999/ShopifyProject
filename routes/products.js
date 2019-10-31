const Router = require('koa-router');
const router = new Router();
const Product = require('../models/Product');

router.get('/api/products', async ctx => {
    await Product.findAll()
        .then(products => {
            ctx.body = products
        })
        .catch(err => {
            ctx.body = 'error: ' + err
        })
})

router.get('/api/product/:id', async ctx => {
    await Product.findOne({
        where: {
            ProductID: ctx.params.id
        }
    })
        .then(product => {
            if (product) {
                ctx.body = product
            } else {
                ctx.body = "product does not exist"
            }

        })
        .catch(err => {
            ctx.body = 'error' + err
        })
})

router.post('/api/product', async ctx => {
    if (!ctx.request.body.ProductName) {
        ctx.body = {
            error: "Bad data"
        }

    } else {
        await Product.create(ctx.request.body)
            .then(data => {
                ctx.body = data
            })
            .catch(err => {
                ctx.body = 'error' + err
            })
    }
})

router.delete('/api/product/:id', async ctx => {
    await Product.destroy({
        where: {
            ProductID: ctx.params.id
        }
    })
        .then(() => {
            ctx.body = { status: "Product Deleted!" }
        })
        .catch(err => {
            ctx.body = 'error' + err
        })
})

router.put('/api/product/:id', async ctx => {
    if (!ctx.request.body.ProductName) {
        ctx.body = {
            error: "bad data"
        }
    } else {
        await Product.update(
            { ProductName: ctx.request.body.ProductName },
            { where: { ProductID: ctx.params.id } }
        )
            .then(() => {
                ctx.body = { status: 'Product updated' }
            })
            .catch(err => {
                ctx.body = 'error' + err
            })
    }

})

module.exports = router