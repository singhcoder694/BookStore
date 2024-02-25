const books_list = [
    {
        id: 1,
        title: "Rich Dad and Poor Dad",
        Author: "Vivek Singh Kumar",
        ISBN: "A29834982734982",
        Price: "15",
        Image: "https://images.thenile.io/r1000/9781612680194.jpg",
        Description: "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial education, financial independence, building wealth through investments, and entrepreneurship. The book tells the story of two fathers: the 'poor dad,' who was highly educated but financially poor, and the 'rich dad,' who never finished eighth grade yet became one of the wealthiest men in Hawaii. The author shares the financial lessons he learned from both his 'poor dad' and 'rich dad' to illustrate the mindset and strategies needed for financial success."
    },
    {
        id: 2,
        title: "The Alchemist",
        Author: "Paulo Coelho",
        ISBN: "B29834982734983",
        Price: "12",
        Image: "https://images.thenile.io/r1000/9780062315007.jpg",
        Description: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he decides to travel to a Romani fortune-teller in a nearby town to discover its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids. After being robbed and stranded in Tangier, Santiago meets a crystal merchant who shows Santiago that it is the journey that matters, not just the destination. Along the way, Santiago meets an Englishman, a camel driver, and the Alchemist, all of whom teach Santiago valuable lessons about life and following one's dreams."
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        Author: "Harper Lee",
        ISBN: "C29834982734984",
        Price: "10",
        Image: "https://images.thenile.io/r1000/9780061120084.jpg",
        Description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The novel is set in the fictional town of Maycomb, Alabama, during the Great Depression, and is narrated by six-year-old Scout Finch. The story follows Scout's father, Atticus Finch, a lawyer who defends a black man, Tom Robinson, who has been falsely accused of raping a white woman. Through Scout's innocent eyes, the novel explores themes of racial injustice, moral growth, and the loss of innocence."
    },
    {
        id: 4,
        title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        ISBN: "D29834982734985",
        Price: "11",
        Image: "https://images.thenile.io/r1000/9780141182636.jpg",
        Description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby. Gatsby is obsessed with Daisy Buchanan, Nick's cousin and the wife of Tom Buchanan, a wealthy man with a questionable past. As Nick becomes drawn into Gatsby's world of luxury and deceit, he learns about Gatsby's past and the true nature of his love for Daisy. The novel explores themes of the American Dream, love, wealth, and the decline of morality in society."
    },
    {
        id: 5,
        title: "1984",
        Author: "George Orwell",
        ISBN: "E29834982734986",
        Price: "9",
        Image: "https://images.thenile.io/r1000/9780141036144.jpg",
        Description: "1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Set in a totalitarian regime in the year 1984, the novel follows Winston Smith, a low-ranking member of the ruling Party in London. Winston rebels against the oppressive regime by secretly engaging in acts of rebellion and falling in love with Julia, another Party member. As he becomes more involved in resistance activities, Winston faces the brutal reality of life under a surveillance state and the consequences of challenging authority."
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        Author: "Jane Austen",
        ISBN: "F29834982734987",
        Price: "8",
        Image: "https://images.thenile.io/r1000/9780141199078.jpg",
        Description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential. The comedy of the writing lies in the depiction of manners, education, marriage, and money during the Regency era in Britain. Mr. Darcy, a wealthy and proud man, initially appears aloof and disdainful of the local society but ultimately falls in love with Elizabeth and learns to overcome his pride."
    },
    {
        id: 7,
        title: "Harry Potter and the Sorcerer's Stone",
        Author: "J.K. Rowling",
        ISBN: "G29834982734988",
        Price: "14",
        Image: "https://images.thenile.io/r1000/9780590353427.jpg",
        Description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The novel tells the story of a young boy named Harry Potter who discovers that he is a wizard and is invited to attend Hogwarts School of Witchcraft and Wizardry. As Harry navigates the challenges of school life, he learns about his past, his parents' mysterious deaths, and his connection to the dark wizard Voldemort. With the help of his friends Hermione Granger and Ron Weasley, Harry uncovers Voldemort's plot to return to power and sets out to stop him."
    },
    {
        id: 8,
        title: "The Hobbit",
        Author: "J.R.R. Tolkien",
        ISBN: "H29834982734989",
        Price: "13",
        Image: "https://images.thenile.io/r1000/9780261102217.jpg",
        Description: "The Hobbit, or There and Back Again is a fantasy novel and children's book by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The novel follows the quest of home-loving hobbit Bilbo Baggins, who is persuaded by the wizard Gandalf to accompany thirteen dwarves on a dangerous journey to reclaim the treasure guarded by the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and giant spiders, and learns that true courage comes from within."
    },
    {
        id: 9,
        title: "The Catcher in the Rye",
        Author: "J.D. Salinger",
        ISBN: "I29834982734990",
        Price: "10",
        Image: "https://images.thenile.io/r1000/9780241950425.jpg",
        Description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst and alienation, and as a critique on superficiality in society. The novel's protagonist, Holden Caulfield, is a cynical teenager who has been expelled from several prep schools and is wandering the streets of New York City. Over the course of three days, Holden reflects on his life, his relationships with his family and peers, and his desire to protect the innocence of his younger sister, Phoebe."
    },
    {
        id: 10,
        title: "The Da Vinci Code",
        Author: "Dan Brown",
        ISBN: "J29834982734991",
        Price: "16",
        Image: "https://images.thenile.io/r1000/9780552149518.jpg",
        Description: "The Da Vinci Code is a mystery thriller novel by Dan Brown, published in 2003. It follows symbologist Robert Langdon and cryptologist Sophie Neveu as they investigate a murder in the Louvre Museum and discover a trail of clues hidden in the works of Leonardo da Vinci. The novel explores themes of religion, history, art, and conspiracy theories, and has generated controversy over its portrayal of historical events and religious organizations. Despite mixed reviews from critics, The Da Vinci Code became a bestseller and has been adapted into a successful film starring Tom Hanks."
    },

]
export default books_list
