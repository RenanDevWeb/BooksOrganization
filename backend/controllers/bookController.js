import bookModel from '../models/books.js';

export const getBooks = async (req, res) => {
  try {
    const getBook = await bookModel.find();
    res.status(200).json(getBook);
  } catch (error) {
    console.log(error);
  }
}

export const getBookById = async (req, res) => {
  const idd = req.params.id;
  try {
    const bookForId = await bookModel.find({ _id: idd });
    res.status(200).json(bookForId);
  } catch (err) {
    console.error(err);
  }
};

export const addBook = async (req, res) => {
  const { title } = req.body;
  const { author } = req.body;
  const { category } = req.body;
  const { pages } = req.body;
  const { status } = req.body;
  const { username } = req.body;
  const book = {
    title,
    author,
    category,
    pages,
    status,
    username
  };

  try {
    const newBook = new bookModel(book);
    newBook.save();
    res.status(200).json('inserido no banco com sucesso');
  } catch (err) {
    console.error(err);
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookModel.findById(id);
    Object.assign(book, req.body);
    book.save();
    res.status(200).json('atualizado com sucesso');
  } catch (error) {
    console.error(error);
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await bookModel.deleteOne({ _id: id });
    res.status(200).json('excluido com sucesso');
  } catch (error) {
    console.log(error);
  }
};
