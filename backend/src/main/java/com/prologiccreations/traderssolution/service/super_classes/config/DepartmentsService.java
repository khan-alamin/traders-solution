package com.prologiccreations.traderssolution.service.super_classes.config;

import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Departments;
import com.prologiccreations.traderssolution.service.super_classes.CrudService;

import java.util.List;

public interface DepartmentsService extends CrudService<Departments, Long> {

    Response<List<ManagerDto>> findAllManagers();

}
