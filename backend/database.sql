USE alexkrugeri_com_db_shareat;

DROP PROCEDURE IF EXISTS CreateUser;
CREATE PROCEDURE `CreateUser`(
    IN firstnameVar VARCHAR(50),
    IN lastnameVAR VARCHAR(50),
    IN emailVar VARCHAR(30),
    IN passwordVar VARCHAR(60)
)
BEGIN
    START TRANSACTION;

        INSERT INTO users (FirstName, LastName)
        VALUES (firstnameVar, lastnameVar);
 
        SET @userID := (SELECT id FROM users ORDER BY id DESC LIMIT 1);

        INSERT INTO UserLogin (id, Email, PSWD)
        VALUES (@userID, usernameVar, passwordVar);
    COMMIT;
END;



DROP PROCEDURE IF EXISTS AddItem;

CREATE PROCEDURE `AddItem` (
    IN ItemNameVar VARCHAR(50),
    IN ItemDescriptionVar TEXT
) 
BEGIN 
    START TRANSACTION;
        INSERT INTO Items (ItemName, ItemDescription, UserID, DietaryID, AllergyID)
        VALUES (ItemNameVar, ItemDescriptionVar, @UserID, @DietaryID, @AllergyID);

        SET @UserID := (SELECT id FROM users ORDER BY id DESC LIMIT 1);

        SET @DietaryID := (SELECT id FROM DietaryRestrictions ORDER BY id DESC LIMIT 1);

        SET @AllergyID := (SELECT id FROM Allergies ORDER BY id DESC LIMIT 1);
    COMMIT;
END;

