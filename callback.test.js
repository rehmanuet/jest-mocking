describe("Jest Promise  Handling", function () {
    it("Promise Resolve Case ", function () {
        /* Be sure to return the promise - if you omit this return statement, your test will complete before the promise
          returned from fetchData resolves and then() has a chance to execute the callback.
           */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("test1");
            }, 2000);
        }).then((e) => {
            expect(e).toBe("test1");
        });
    });
    it("Promise Reject Case ", async () =>{

        const onMyBirthday = (isKayoSick) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (!isKayoSick) {
                        resolve(2);
                    } else {
                        reject(new Error("I am sad"));
                    }
                }, 2000);
            });
        };

         await expect(onMyBirthday(true)).rejects.toHaveProperty('message', 'I am sad');// matches

    });
});
