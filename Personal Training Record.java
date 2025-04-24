Personal Training Record 

Api : TrainingPlannerResponse planPersonalTraining(@RequestBody PersonalTrainingPlannerRequest personalTrainingPlannerRequest)

Request : PersonalTrainingPlannerRequest
{
  private List<TrainingSessionRequest> trainingAssignmentList;
    private List<EmployeeRequest> employeeList;
    private String plannerType;
    private EmployeeRequest trainer;
    private EmployeeRequest preparedBy;
    private EmployeeRequest approvedBy;
    private EmployeeRequest reviewedBy;
}

TrainingSessionRequest 
{
    private String startDate;
    private EmployeeRequest trainer;
    private ModuleRequest trainingModule;
    private Long id;
    private List<EmployeeRequest> employeeList;
}
EmployeeRequest
{
private String employeeCode;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String phoneNumber;
    private String fatherName;
    private String education;
    private String designation;
    private String department;
    private String subDepartment;
    private Long id;
}

ModuleRequest
{
  private String trainingTittle;
    private String description;
    private String referenceDocumentNumber;
    private Integer durationInHours;
    private String oral;
    private String written;
    private String practical;
    private Long id;
}

public enum PlannerType {

    Personal_Training_Record("Personal Training Record"),
    Departmental_SKill_Set("Departmental Skill Set"),
    Annual_Training_Planner("Annual Training Planner");
}

Response : TrainingPlannerResponse
{
    private List<TrainingSessionResponse> trainingSessionResponseList;
    private EmployeeDataResponse preparedBy;
    private EmployeeDataResponse approvedBy;
    private EmployeeDataResponse reviewedBy;
    private String plannerType;
    private String subDepartment;
    private String department;
    private Long id;
}
TrainingSessionResponse
{
    private String startDate;
    private EmployeeDataResponse trainer;
    private ModuleResponse trainingModule;
    private Set<EmployeeDataResponse> employeeList;
    private Long id;
}
EmployeeDataResponse{
    private String employeeCode;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String phoneNumber;
    private String fatherName;
    private String education;
    private String designation;
    private String department;
    private String subDepartment;
    private Long id;
}
public class ModuleResponse extends BaseResponse{
    private String trainingTittle;
    private String description;
    private String referenceDocumentNumber;
    private Integer durationInHours;
    private String oral;
    private String written;
    private String practical;
    private Long id;
}

