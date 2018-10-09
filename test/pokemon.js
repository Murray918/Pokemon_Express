const chai = require('chai');
const supertest = require('supertest');
const app = require('../server');
const should = chai.should()
const cheerio = require('cheerio');

describe('RESTful pokemon routes', function(){
    it('displays all pokemon at the index route', function(done){
        supertest(app)
            .get('/pokemon')
            .expect(200)
            .expect((response)=>{
                const $ = cheerio.load(response.text);
                $('.pokemon li:first-child').text().should.be.eq('Bulbasaur')
                $('.pokemon li:last-child').text().should.be.eq('Wartortle');
            })
            .end(done);
    })
    it('displays a specific pokemon by index', function(done){
        supertest(app)
        .get('/pokemon/2')
        .expect(200)
        .expect((response)=>{
            const $ = cheerio.load(response.text);
            $('body').text().includes("Venusaur").should.be.eq(true);
            $('body').text().includes("Charizard").should.be.eq(false);
        })
        .end(done)
    })
    it('has a list of links on the index page', function(done){
        supertest(app)
        .get('/pokemon')
        .expect(200)
        .expect((response)=>{
            const $ = cheerio.load(response.text)
            const firstHref = $('.pokemon li:first-child a').attr('href');
            firstHref.should.be.eq('/pokemon/0')
        })
        .end(done)
    })
    it('has an edit page', function(done){
        supertest(app)
        .get('/pokemon/0/edit')
        .expect(200)
        .expect((response)=>{
            const $ = cheerio.load(response.text)
            const formMethod = $('form').attr('method');
            formMethod.should.be.eq('POST')
        })
        .end(done)
    })
    it('has a new pokemon page', function(done){
        supertest(app)
        .get('/pokemon/new')
        .expect(200)
        .expect((response)=>{
            const $ = cheerio.load(response.text)
            const formMethod = $('form').attr('method');
            formMethod.should.be.eq('POST')
            const formAction = $('form').attr("action");
            formAction.should.be.eq('/pokemon')
        })
        .end(done)
    })
    it('can create a new pokemon with a POST request', function(done){
        supertest(app)
        .post('/pokemon')
        .send({"name": "Morty"})
        .end(()=>{
            supertest(app)
            .get('/pokemon')
            .expect((response)=>{
                const $ = cheerio.load(response.text);
                $('body').text().includes("Morty");
            })
            .end(done)
        })
    })
    it('can update a pokemon with a PUT request', function(done){
        supertest(app)
        .put('/pokemon/2')
        .send({'name': 'The pokemon formerly known as Venusaur'})
        .end(()=>{
            supertest(app)
            .get('/pokemon/2')
            .expect(200)
            .expect((response)=>{
                const $ = cheerio.load(response.text);
                $('body').text().includes("The pokemon formerly known as Venusaur").should.be.eq(true);
                $('body').text().includes("Charizard").should.be.eq(false);
            })
            .end(done)
        })
    })
    it('can delete a pokemon with a DELETE request', function(done){
        supertest(app)
        .delete('/pokemon/0')
        .end(()=>{
            supertest(app)
            .get('/pokemon/0')
            .expect(200)
            .expect((response)=>{
                const $ = cheerio.load(response.text);
                $('body').text().includes("Ivysaur").should.be.eq(true);
                $('body').text().includes("Bulbasaur").should.be.eq(false);
            })
            .end(done)
        })
    })
})