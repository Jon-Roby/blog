cats = Array.new(100, "hatless")
increment = 1

until increment == 100
	cats.each_with_index do |cat, idx|
		if idx % increment == 0
			if cat == "hatless"
				cat == "hat"
			else
				cat = "hatless"
			end
	end
	increment += 1
end

cats.each_with_index do |cat, idx|
	if cat == "hatless"
		print idx
	end
end

