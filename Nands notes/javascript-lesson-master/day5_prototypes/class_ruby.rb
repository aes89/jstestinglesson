# class is a blue print : eg: Application form
# object is an instance of the class : eg: Nands Application form

class Human
    def initialize(name)
        @name = name
    end
    def name
        @name
    end
    def walk
        puts "I can walk"
    end
end

# create an object
person1 = Human.new("bob")
person2 = Human.new("joe")
puts person1.name
puts person2.name
# puts person1.length
person1.to_s
puts "hello".length
person1.walk
person2.walk
p Human.methods