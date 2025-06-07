def calculate_average(grades):
    return sum(grades) / len(grades)

students = {}

while True:
    print("\nGrade Management System")
    print("1. Add Student")
    print("2. View Students")
    print("3. Exit")
    choice = input("Enter your choice: ")

    if choice == '1':
        name = input("Enter student name: ")
        grades = list(map(float, input("Enter grades separated by space: ").split()))
        students[name] = grades
        print(f"Added {name} with grades {grades}.")
    elif choice == '2':
        for name, grades in students.items():
            avg = calculate_average(grades)
            print(f"{name} - Grades: {grades}, Average: {avg:.2f}")
    elif choice == '3':
        print("Exiting...")
        break
    else:
        print("Invalid choice. Please try again.")