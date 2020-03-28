
exports.up = function(knex) { //semepre que precisar criar tabela usar método up
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //sempre que dar problema, ou sej,a precisar voltar tabela usar metodo down
    return knex.schema.dropTable('ongs');
};
