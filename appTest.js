QUnit.test("It should register users", function( assert ) {
	 assert.equal(appUI.say("123"),"123" , "Passed!" );
    assert.equal(appUI.say("456"),"456" , "Passed!" );
    assert.equal(appUI.say("jokeme"),"jokeme" , "Passed!" );
    assert.equal(appUI.say("123"),"123" , "Passed!" );
});
