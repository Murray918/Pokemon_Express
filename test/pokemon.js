const chai = require('chai');
const supertest = require('supertest');
const app = require('../server');
const should = chai.should()
const cheerio = require('cheerio');

describe('pokemon routes index and show', function(){
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
            const firstHref = $('.pokemon li:first-child').attr('href');
            firstHref.should.be.eq('/pokemon/0')
        })
    })
})