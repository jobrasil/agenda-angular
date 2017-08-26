describe('Conjunto de teste',function(){

var ContatosTeste;

beforeEach(angular.mock.module('ContatosService'));

beforeEach(inject(function(Contatos){

    ContatosTeste = Contatos;

}))

it('Serviço Existe?',function(){
  expect(ContatoTeste).toBeDefined();      
});


});