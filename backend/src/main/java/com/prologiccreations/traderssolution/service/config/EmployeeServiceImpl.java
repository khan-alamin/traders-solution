package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.EmployeeRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.service.super_classes.config.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository EmployeeRepository;

    @Override
    public Response storeData(Employee data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            EmployeeRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Employee>> getAll(Pageable pageable) {
        Page<Employee> page = EmployeeRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Employee> getById(Long id) {
        Employee Employee = EmployeeRepository.findById(id).orElse(new Employee());
        return new Response<>(SUCCESS, null, Employee);
    }

    @Override
    public Response delete(Long id) {
        EmployeeRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Employee data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Employee data) {
//        boolean EmployeenameExists;
//        if (data.hasId()) {
//            EmployeenameExists = EmployeeRepository.existsByEmployeename(data.getEmployeename(), data.getId());
//        } else {
//            EmployeenameExists = EmployeeRepository.existsByEmployeename(data.getEmployeename());
//        }
//        return EmployeenameExists ? "Failed to register. Employee already exists" : null;
        return null;
    }

}
