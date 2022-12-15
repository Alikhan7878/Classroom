const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
        if (this.level < 5) {
            this.stack.push(fullStack[this.level++]);
        }
        return this;
    }
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel();

console.log(student);