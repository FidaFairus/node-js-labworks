for (i = 1; i <= 4; i++) {

    if ((i == 1) || (i == 4)) {
        for (j = 1; j <= 10; j++) {
            process.stdout.write("*")
        }
        console.log()
    }

    else {
        process.stdout.write("*")
        for (k = 1; k <= 10-2; k++) {
                process.stdout.write(" ")
        }
        process.stdout.write("*")
        
        console.log()
    }
}
