
Database Diagram 
+-------------------------------+
|          register_forms       |
+-------------------------------+
| _id: ObjectId (PK)            |
| institute_type: String        |  ["Playhouse","School","College","Competitive Exam Center"]
| board: String                 |  ["GSAB", "CBSE"] - optional
| medium: String                |  ["English", "Hindi"] - optional
| class: String                 |  ["Pre-primary","Primary","Secondary","Higher Secondary"] - optional
| standard: String              |  - optional
| subject: String               |  - optional
| university: String            |  - optional
| degree: String                |  - optional
| exam_type: String             |  - optional
| createdAt: Date               |
| updatedAt: Date               |
+-------------------------------+
