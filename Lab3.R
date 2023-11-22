

movie <- list("Toy Story", 1995, c("Animation", "Adventure", "Comedy"))

movie

movie[2]

movie[2: 3]

movie <- list(name = "Toy Story", year = 1995, genre = c("Animation", "Adventure", "Comedy"))

movie

movie$genre

movie["genre"]

movie$genre[2]

movie[2: 3]

class(movie$name)

movie[["age"]] <- 5

movie

movie[["age"]] <- 6

# Now it's 6, not 5
movie

movie[["age"]] <- NULL

movie

movie[["WillWatch"]] <- T

movie

# We split our previous list in two sublists
movie_part1 <- list(name = "Toy Story")
movie_part2 <- list(year = 1995, genre =c("Animation", "Adventure", "Comedy"))

# Now we call the function c() to put everything together again
movie_concatenated <- c(movie_part1, movie_part2)

# Check it out
movie_concatenated

movies <- data.frame(name = c("Toy Story", "Akira", "The Breakfast Club", "The Artist",
                             "Modern Times", "Fight Club", "City Of God", "The Untouchables"),
                              year = c(1995, 1998, 1985, 2011, 1936, 1999, 2002, 1987),
                              stringsAsFactors = F)


movies

movies$name

# This returns the first (1st) column
movies[1]

movies[2]

movies[1,]

movies[1:2, 1]

str(movies)

class(movies$year)

movies[1, 2] #1-Toy Story, 2-1995

head(movies)

tail(movies)

# Find the rows with name "Toy Story"
selected <- movies["name"] == "Toy Story"
# Get the selected row(s) with 'name' and 'year' columns
toy_story <- movies[selected, c("name", "year")]

toy_story

movies["length"] <- c(81, 125, 97, 100, 87, 139, 130, 119)
movies

movies <- rbind(movies, c(name = "Dr. StrangeLove", year = 1964, length = 94))
movies

movies <- movies[-12, ]
movies

movies[["length"]] <- NULL
movies

kinza <- c(1, 2, 3, 4, 5)

kinza[5: 1]





























































