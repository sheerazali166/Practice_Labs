release_year <- c(1985, 1999, 2015, 1964)
release_year

# Create genre vector and assign values to it 
titles <- c("Toy Story", "Akira", "The Breakfast Club")
titles

titles == "Akira" # which item in `titles` is equal to "Akira"?

# Write your code below. Don't forget to press Shift+Enter to execute the cell
titles == "Toy Story"

release_year <- c(1985, 1999, 2015, 1964)
release_year

release_year

length(release_year)

head(release_year) #first six items

head(release_year,n = 2) #first n items

head(release_year, 2)

tail(release_year) #last six items

tail(release_year, 2) #last two items

sort(release_year)

sort(release_year, decreasing = TRUE)

min(release_year)
max(release_year)

cost_2014 <- c(8.6, 8.5, 8.1)

# sum results in the sum of all elements in the vector
avg_cost_2014 <- sum(cost_2014) / 3
avg_cost_2014

mean_cost_2014 <- mean(cost_2014)
mean_cost_2014

#Creating a year vector
release_year <- c(1985, 1999, 2010, 2002)

#Assigning names
names(release_year) <- c("Breakfast Club", "American Beauty", "Black Swan", "Chicago")

release_year

release_year[c("American Beauty", "Chicago")]

release_year[1] + 100 #adding 100 to the first item changes the year

names(release_year)

# Write your code below. Don't forget to press Shift+Enter to execute the cell
year_difference <- release_year["Black Swan"] - release_year["Breakfast Club"]
year_difference

summary(cost_2014)




cost_2014 <- c(8.6, 8.5, 8.1)

# sum results in the sum of all elements in the vector
avg_cost_2014 <- sum(cost_2014) / 3
avg_cost_2014

mean_cost_2014 <- mean(cost_2014)
mean_cost_2014

#Creating a year vector
release_year <- c(1985, 1999, 2010, 2002)

#Assigning names
names(release_year) <- c("Breakfast Club", "American Beauty", "Black Swan", "Chicago")

release_year

release_year[c("American Beauty", "Chicago")]

release_year[1] + 100 #adding 100 to the first item changes the year

names(release_year)

year_difference = release_year["Black Swan"] - release_year["Breakfast Club"]
year_difference

summary(cost_2014)

movie_years <- 1997
movie_years > 2000

movie_years = c(1998, 2010, 2016)
movie_years > 2014

movie_years == 2015

movie_years != 2015

movie_years <- c(1985, 1999, 2002, 2010, 2012)
movie_years

movie_years[2] #second item

movie_years[3]

movie_years[c(1, 3)]

movie_years[c(2:4)]

movie_years[2: 4]

titles <- c("Black Swan", "Jumanji", "City of God", "Toy Story", "Casino")
titles[-1]

new_titles <- titles[-1] #removes "Black Swan", the first item
new_titles

age_restric <- c(14, 12, 10, NA, 18, NA)
age_restric

release_year > 2000

release_year[release_year > 2000] 

release_year

release_year[c(T, F, F, F)]

# Write your code below. Don't forget to press Shift+Enter to execute the cell
release_year <= 1999
release_year[c(T, T, F, F)]

genre_vector <- c("Comedy", "Animation", "Crime", "Comedy", "Animation")
genre_vector

genre_vector <- as.factor(genre_vector)
levels(genre_vector)

summary(genre_vector)

#sorts values by ascending order
sort(summary(genre_vector))

movie_length <- c("Very Short", "Short", "Medium", "Short", "Long", "Very Short", "Very Long")
movie_length

movie_length_ordered <- factor(movie_length, ordered = TRUE,
                               levels = c("Very Short", "Short", "Medium", "Long", "Very Long"))

movie_length_ordered

summary(movie_length_ordered)

movie_length_ordered <- factor(movie_length, ordered = TRUE,
                                 levels = c("Very Long", "Short", "Medium", "Long", "Very Short"))

movie_length_ordered
