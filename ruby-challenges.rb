# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'

letter_t = 't'

# gonna def my function as liquid 
# set two parameter for the letters and beverages_array
# use .select to value then .include to see if it contains our specific string 
def liquid (array, letter) 
    array.select do |value| (value).include?(letter)
    end
end
p liquid(beverages_array, letter_o )
# Expected output: ['coffee', 'soda water']
p liquid(beverages_array, letter_t)
# Expected output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# def worst_states as my function
# one parameter for the array of us_states
# .values used for getting the array values in alphabetical order
# flatten to get rid of nested arrays 
# sort will be the method to take the values and palce them to recive the array in alphabetical order
def worst_states (array)
    array.values.flatten.sort { |a, b| a <=> b }
end
p worst_states(us_states)
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# didnt really know how to puedo code this its already written within the question just really have to make the class

class Bike
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster (speed)
        @current_speed = speed + @current_speed
    end
    def brake(speed)
        @current_speed = @current_speed - speed
        if @current_speed = 0
            0
        else
            @current_speed
        end
    end
end
trek_bike = Bike.new('trek')
p trek_bike.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
p trek_bike.pedal_faster(10)
# Expected output example: my_bike.pedal_faster(18) => 28
p trek_bike.pedal_faster(18)
# Expected output example: my_bike.brake(5) => 23
p trek_bike.brake(5)
# Expected output example: my_bike.brake(25) => 0
p trek_bike.brake(0)