
exports.seed = function(knex, Promise) {
  return knex('book').del()
    .then(function () {
      let books = [{
        id: 1,
        title: "Hitchhiker's Guide To The Galaxy",
        isbn: "9780345391803",
        cost: 10.00,
        image_url: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2014%2F10%2Fhitchhiker-s-guide-douglas-adams-657242_451_700.jpg&w=700&q=85",
        author_id: 1
      },{
        id: 2,
        title: "Dune",
        isbn: "9780441172719",
        cost: 15.00,
        image_url: "http://78.media.tumblr.com/tumblr_m589qrFffi1qbaom0.jpg",
        author_id: 2
      },{
        id: 3,
        title: "American Gods",
        isbn: "9780062572233",
        cost: 4.00,
        image_url: "https://images-na.ssl-images-amazon.com/images/I/51Pb-OAREFL._SX327_BO1,204,203,200_.jpg",
        author_id: 3
      },{
        id: 4,
        title: "The Dark Tower: The Gunslinger",
        isbn: "9781501143519",
        cost: 18.00,
        image_url: "http://aidanmoher.com/blog/wp-content/uploads/2012/01/the-gunslinger-stephen-king.jpeg",
        author_id: 4
      },{
        id: 5,
        title: "The Lord of the Rings",
        isbn: "9780618640157",
        cost: 25.00,
        image_url: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
        author_id: 5
      },{
        id: 6,
        title: "A Game of Thrones",
        isbn: "9780553593716",
        cost: 10.00,
        image_url: "https://images-na.ssl-images-amazon.com/images/I/51eOGeY8ArL._SX323_BO1,204,203,200_.jpg",
        author_id: 6
      }];
      return knex('book').insert(books)
        .then(() => {
          return knex.raw('ALTER SEQUENCE book_id_seq RESTART WITH 7;');
        });
    });
};
